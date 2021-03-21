
/** 
 Component for show search result
*/


export default function SearchResult({location: { text }}){

  return (
    <div className = "app-body" style = {{color: "blue", fontWeight: "bolder"}}>
      <h2>
        Search Result for:
        <span style = {{fontWeight: "bolder", color: "green"}}>
          { ` "${text}"` }
        </span>
      </h2>
    </div>
  );
}