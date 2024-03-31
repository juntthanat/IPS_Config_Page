import "./title_header.css";

export default function TitleHeader(props) {
  const { title } = props ?? {};
  return (
    <div id="title-header-background">
      <div id="title-header-container">{title}</div>
    </div>
  );
}
