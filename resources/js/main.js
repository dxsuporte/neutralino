let startApp = async () => {
  try {
    const config = JSON.parse(
      await Neutralino.filesystem.readFile("./start/config.json")
    );
    Neutralino.os.open(`http://${config.host}:${config.port}`);
    Neutralino.app.exit();
  } catch (err) {
    console.error(err);
  }
};

Neutralino.init();

startApp();
