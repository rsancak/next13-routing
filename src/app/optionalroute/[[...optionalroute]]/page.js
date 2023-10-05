export default function OptionalRoute({params}){
    // Route : optional route and all sub pages
    console.log(params)
    return(
        <div>Optional Route Page {params.optionalroute}</div>
    );
}