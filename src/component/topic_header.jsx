import "./topic_header.css"


export default function TopicHeader(topic){
    return (
        <div id="topic-header-background">
            <div id="topic-header-container">
                {topic}
            </div>
        </div>
    )
}