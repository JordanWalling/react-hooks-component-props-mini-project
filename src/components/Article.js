function Article(post) {
  console.log(post);
  const { title, date = "January 1, 1970", preview, minutes } = post;
  let value;

  if (minutes < 30) {
    if (minutes < 5) {
      value = <span> ☕️ {minutes} mins read</span>;
    } else if (minutes < 10) {
      value = <span> ☕️☕️ {minutes} mins read</span>;
    } else if (minutes < 15) {
      value = <span> ☕️☕️☕️ {minutes} mins read</span>;
    } else if (minutes < 20) {
      value = <span> ☕️☕️☕️☕️ {minutes} mins read</span>;
    } else {
      value = <span> ☕️☕️☕️☕️☕️ {minutes} mins read</span>;
    }
  }
  if (minutes > 30) {
    if (minutes > 30 && minutes < 40) {
      value = <span> 🍱🍱🍱🍱 {minutes} mins read</span>;
    } else if (minutes > 40 && minutes < 50) {
      value = <span> 🍱🍱🍱🍱🍱 {minutes} mins read</span>;
    } else if (minutes > 50 && minutes < 60) {
      value = <span> 🍱🍱🍱🍱🍱🍱 {minutes} mins read</span>;
    } else {
      value = <span> 🍱🍱🍱🍱🍱🍱🍱 {minutes} mins read</span>;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <span>{value}</span>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
