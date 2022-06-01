import "./styles.css";

const renderWelcomePanel = (container: HTMLElement) => {
  const userName = localStorage.getItem("userName");
  const photoURL = localStorage.getItem("userPhoto");

  const htmlContent = `
  <div class= "header"  >
 
  <img src="${photoURL}"  >
  <a href="details.html">Detalhes</a>
  <a href="logout.html">Sair</a>
  <h1>Autenticação com o Google</h1>
</div>
        <div id="welcome">
            <h1>Fique à vontade ${userName}!</h1>
          


            <h3>${getTimeStamp()}</h3>  
        </div>  
    `;

  container.innerHTML = htmlContent;
};

function getTimeStamp() {
  var now = new Date();
  return (
    now.getDate() +
    "/" +
    (now.getMonth() + 1) +
    "/" +
    now.getFullYear() +
    " " +
    now.getHours() +
    ":" +
    (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
    ":" +
    (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds())
  );
}

console.log(getTimeStamp());

export default renderWelcomePanel;
