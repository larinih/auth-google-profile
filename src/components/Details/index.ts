import "./styles.css";

const renderDetailsPanel = (container: HTMLElement) => {
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const photoURL = localStorage.getItem("userPhoto");


  const htmlContent = `
  <div class= "header"  >

  <img src="${photoURL}"  >
  <a href="index.html">Login</a>
  <a href="logout.html">Sair</a>
  <h1>Autenticação com o Google</h1>
</div>
        <div id="welcome">
        <h1>Detalhes</h1>
            <h2>Nome: ${userName}</h2>
            <h2>Email: ${userEmail}</h2>
           
           

        
        </div>  
    `;

  container.innerHTML = htmlContent;
};



export default renderDetailsPanel;
