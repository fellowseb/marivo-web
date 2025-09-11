import "./style.css";

class LogoSpotlightsEffect {
  public start() {
    this.startMovement();
    this.listenTryOutBtnHover();
  }

  private startMovement() {
    this.intervalId = setInterval(() => {
      const leftSpotAngle = Math.random() * 100 - 50;
      const rightSpotAngle = Math.random() * 100 - 50;
      const leftSpotSpeed = Math.random() * 0.5 + 0.5;
      const rightSpotSpeed = Math.random() * 0.5 + 0.5;
      this.moveSpotlights(
        leftSpotAngle,
        leftSpotSpeed,
        rightSpotAngle,
        rightSpotSpeed,
      );
    }, 1000);
  }

  private stopMovement() {
    clearInterval(this.intervalId);
  }

  private moveSpotlights(
    leftSpotAngle: number,
    leftSpotSpeed: number,
    rightSpotAngle: number,
    rightSpotSpeed: number,
  ) {
    const rightSpotElem = document.getElementById("logo-spot-right");
    if (!rightSpotElem) {
      throw new Error("Unable to find logo-spot-right element");
    }
    const leftSpotElem = document.getElementById("logo-spot-left");
    if (!leftSpotElem) {
      throw new Error("Unable to find logo-spot-left element");
    }
    leftSpotElem.setAttribute(
      "style",
      `transform: rotate(${leftSpotAngle}deg); transition: transform ${leftSpotSpeed}s ease-out;`,
    );
    rightSpotElem.setAttribute(
      "style",
      `transform: rotate(${rightSpotAngle}deg); transition: transform ${rightSpotSpeed}s ease-out;`,
    );
  }

  private listenTryOutBtnHover() {
    const tryOutBtn = document.getElementById("try-out-btn");
    if (!tryOutBtn) {
      return;
    }
    tryOutBtn.addEventListener("mouseenter", () => {
      this.stopMovement();
      this.moveSpotlights(0, 0.1, 0, 0.1);
    });
    tryOutBtn.addEventListener("mouseleave", () => {
      this.startMovement();
    });
  }

  private intervalId?: number;
}

window.addEventListener("DOMContentLoaded", function onDOMLoaded() {
  this.setTimeout(function () {
    new LogoSpotlightsEffect().start();
  }, 5000);
});
