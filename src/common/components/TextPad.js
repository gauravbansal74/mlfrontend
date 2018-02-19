

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Editor, EditorState, RichUtils, convertFromHTML, ContentState} from 'draft-js';
import './textpad.css';

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 12,
    padding: 2,
  },
};

class TextPad extends React.Component {
  constructor(props) {
    super(props);
    let editorState;
    if (props.value) {
      const blocksFromHTML = convertFromHTML(props.value);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML);
      editorState = EditorState.createWithContent(contentState);
    } else {
      editorState = EditorState.createEmpty();
    }
    this.state = {editorState};
		// this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this._onChange(editorState);
    this.handleKeyCommand = command => this._handleKeyCommand(command);
    this.onTab = e => this._onTab(e);
    this.toggleBlockType = type => this._toggleBlockType(type);
    this.toggleInlineStyle = style => this._toggleInlineStyle(style);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(editorState) {
    const that = this;
    this.setState({editorState});
    this.props.textChange(that.props.name, editorState.getCurrentContent().getPlainText()); // markdown
    this.props.textChange(that.props.nameHtml, that.refs[that.props.name].refs.editor.innerHTML);
  }

  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }
  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
			RichUtils.toggleBlockType(
				this.state.editorState,
				blockType
			)
		);
  }
  _getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
			RichUtils.toggleInlineStyle(
				this.state.editorState,
				inlineStyle
			)
		);
  }

  render() {
    const {editorState} = this.state;
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    return (
      <div className="pt-1">
        <label htmlFor={this.props.name}>
          <div className="label-title">{this.props.label}</div>
        </label>
        <div className="RichEditor-root">
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
					/>
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
					/>
          <div className={className}>
            <Editor
              blockStyleFn={this._getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              onTab={this.onTab}
              placeholder={this.props.placeholder}
              ref={this.props.name}
              spellCheck
						/>
          </div>
        </div>
      </div>
    );
  }
}

const onTextChange = (name, data) => function (dispatch) {
  if (data) {
    dispatch({type: name, parameter: data});
  } else {
    dispatch({type: name, parameter: ''});
  }
};

TextPad.propTypes = {
  placeholder: PropTypes.string.isRequired,
  nameHtml: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  textChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  textChange: (name, data) => {
    dispatch(onTextChange(name, data));
  }
});
export default connect(null, mapDispatchToProps)(TextPad);

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
	{label: 'H1', style: 'header-one'},
	{label: 'H2', style: 'header-two'},
	{label: 'H3', style: 'header-three'},
	{label: 'H4', style: 'header-four'},
	{label: 'H5', style: 'header-five'},
	{label: 'H6', style: 'header-six'},
	{label: 'Blockquote', style: 'blockquote'},
	{label: 'UL', style: 'unordered-list-item'},
	{label: 'OL', style: 'ordered-list-item'},
	{label: 'Code Block', style: 'code-block'},
];
const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(type =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
				/>
			)}
    </div>
  );
};

const INLINE_STYLES = [
	{label: 'Bold', style: 'BOLD'},
	{label: 'Italic', style: 'ITALIC'},
	{label: 'Underline', style: 'UNDERLINE'},
	{label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
				/>
			)}
    </div>
  );
};

