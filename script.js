let dados = JSON.parse(localStorage.getItem("portfolioDados")) || {
  sobre: "Sou um entusiasta de tecnologia e apaixonado por aprender coisas novas.",
  contatos: ["email@exemplo.com", "+55 51 99999-9999"],
  experiencias: ["Estudante de TI no Senac RS", "Peão na cultura do tabaco"],
  projetos: ["Blog Pessoal|https://meublog.com", "Sistema de Portfólio|https://github.com"]
};

function preencherPortfolio() {
  if (document.getElementById("sobre-texto")) {
    document.getElementById("sobre-texto").textContent = dados.sobre;

    const contatosLista = document.getElementById("contatos-lista");
    contatosLista.innerHTML = "";
    dados.contatos.forEach(c => {
      const li = document.createElement("li");
      if (c.includes("http") || c.includes("www")) {
        const a = document.createElement("a");
        a.href = c;
        a.textContent = c;
        a.target = "_blank";
        li.appendChild(a);
      } else {
        li.textContent = c;
      }
      contatosLista.appendChild(li);
    });

    const expLista = document.getElementById("exp-lista");
    expLista.innerHTML = "";
    dados.experiencias.forEach(e => {
      const li = document.createElement("li");
      li.textContent = e;
      expLista.appendChild(li);
    });

    const projLista = document.getElementById("proj-lista");
    projLista.innerHTML = "";
    dados.projetos.forEach(p => {
      const li = document.createElement("li");
      if (p.includes("|")) {
        const [nome, link] = p.split("|");
        const a = document.createElement("a");
        a.href = link.trim();
        a.textContent = nome.trim();
        a.target = "_blank";
        li.appendChild(a);
      } else {
        li.textContent = p;
      }
      projLista.appendChild(li);
    });
  }
}

if (document.getElementById("login-form")) {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("admin-section").style.display = "block";

      document.getElementById("sobre-edit").value = dados.sobre;
      document.getElementById("contatos-edit").value = dados.contatos.join(", ");
      document.getElementById("exp-edit").value = dados.experiencias.join(", ");
      document.getElementById("proj-edit").value = dados.projetos.join(", ");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  });
}

if (document.getElementById("admin-form")) {
  const adminForm = document.getElementById("admin-form");
  adminForm.addEventListener("submit", (e) => {
    e.preventDefault();

    dados.sobre = document.getElementById("sobre-edit").value;
    dados.contatos = document.getElementById("contatos-edit").value.split(",").map(c => c.trim());
    dados.experiencias = document.getElementById("exp-edit").value.split(",").map(e => e.trim());
    dados.projetos = document.getElementById("proj-edit").value.split(",").map(p => p.trim());

    localStorage.setItem("portfolioDados", JSON.stringify(dados));
    alert("Alterações salvas! Atualize a página inicial para ver as mudanças.");
  });
}

window.addEventListener("DOMContentLoaded", preencherPortfolio);