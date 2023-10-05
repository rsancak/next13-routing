export default function CatchAllRoute({params}){
    // Route : All Nested/Chaining Page
    console.log(params)
    return(
        <div>Catch All Route Page {params.catchallroute}</div>
    );
}