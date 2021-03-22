
/** 
 Component for show search result
*/


export default function SearchResult({location: { state }}){

  return (
    <div className = "app-body" style = {{color: "blue", fontWeight: "bolder"}}>
      <h2>
        Search Result for:
        <span style = {{fontWeight: "bolder", color: "green"}}>
          { ` "${ state }"` }
        </span>
      </h2>
    </div>
  );
}