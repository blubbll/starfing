const commands = {
  presentation: {
    cmd: "presentation",
    res:
      "Yann Le Vaguerès<br>TheRolf<br>Développeur HTML - CSS - JS - jQuery - PHP<br>Designer Photoshop affirmé<br><br><b>Tapez 'help' pour plus de détails sur les commandes</b>"
  },
  visitors: {
    cmd: "visitors",
    res: '<span class="blue">2626</span> visites'
  },
  whoami: {
    cmd: "whoami",
    res:
      "utilisateur: anonyme<br>ip: 12.34.567.890<br>useragent: " +
      navigator.userAgent
  },
  help: {
    cmd: "help",
    res:
      " Aide commandes disponibles<br><br> hello - Dis bonjour<br> clear - Efface le terminal<br> date   - Renvoie la date<br> help  - Liste des commandes disponibles<br> whoami    - Affiche les informations sur l'utilisateur"
  },
  visitors: { cmd: "visitors", res: '<span class="blue">2626</span> visites' },
  hello: { cmd: "hello", res: "Salut, mec !" },
  date: { cmd: "date", res: "ceci est la date" }
};

const prephrase =
  '<span class="green">starfinger </span><span class="red">#</span> ';

const reset = () =>{return $(
  "<div>" +
    prephrase +
    '<form id="form"><input type="text" class="nostyle" term autofocus /></form>'
).appendTo("#content");
                   }
const form = reset();
function launchCommand(command) {
  $(
    "<div>" + prephrase + command.cmd + "<p>" + command.res + "</p></div>"
  ).insertBefore(form);
}

//launchCommand(commands.presentation);
//launchCommand(commands.visitors);

$("form").on("submit", function(e) {
  e.preventDefault();
  try {
    if (
      $("input")
        .val()
        .trim() !== ""
    ) {
      launchCommand(commands[$("input").val()]);
    }
  } catch (error) {
    launchCommand({
      cmd: $("input").val(),
      res: "<div><p>" + $("input").val() + ": command not found</p></div>"
    });
    if ($("input").val() === "clear") {
      $("#content div").remove();
      reset();
       $("input") && $("input")[0].focus();
    }
    $("input").val("")
  }
  //$('input').val('');$('#content').getNiceScroll(0).resize().doScrollTop($('#content')[0].scrollHeight, 0);
});

$(document).on("keyup", "input", function(event) {
  const keyCode = event.which || event.keyCode || event.charCode;
  const chr = $("input").val().slice(-1);
  const tx = chr + "(" + keyCode + ")";
  console.log("Key: " + tx)
  $("#key").text(tx);
});

$(document).on("click", function() {
  $("input") && $("input")[0].focus();
});
