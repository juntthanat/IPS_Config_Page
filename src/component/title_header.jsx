import "./title_header.css"


export default function TitleHeader(title){
    return (
        <div id="title-header-background">
            <div id="title-header-container">
                {title}
            </div>
        </div>
    )
}