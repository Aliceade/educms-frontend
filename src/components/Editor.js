import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

function Editor({ content, setContent }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    }
  });

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10 }}>
      <EditorContent editor={editor} />
    </div>
  );
}

export default Editor;