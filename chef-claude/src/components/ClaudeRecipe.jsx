import ReactMarkdown from 'react-markdown'


export default function ClaudeRecipe(props) {

  return (
    <>
      <section ClassName="suggested-recipe-container">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </section>
    </>
  );
}
