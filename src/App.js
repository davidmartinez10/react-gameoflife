import React, { useEffect, useState } from "react";
import presets from "./presets";

const spacing = 0.5;
const size = 10;
const X = Math.floor(window.innerWidth / size) - size;
const Y = Math.floor(window.innerHeight / size) - size;
const matrix = Array(X).fill().map(function () {
  return Array(Y).fill(0);
});

function calculate(matr) {
  const result = Array(X).fill().map(function () {
    return Array(Y).fill(0);
  });
  let x = matr.length;
  while (x) {
    x -= 1;
    let y = matr[x].length;
    while (y) {
      y -= 1;
      let surrounding_cells = 0;
      const directions = [
        [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]
      ];
      let di = directions.length;
      while (di) {
        di -= 1;
        const dir = directions[di];
        const cell = (matr[x + dir[0]] || [])[y + dir[1]];
        if (cell) {
          surrounding_cells += 1;
        }
      }
      const alive = Boolean(matr[x][y]);
      const procreation = surrounding_cells === 3;
      const underpopulation = surrounding_cells < 2;
      const survival = (
        surrounding_cells === 2
        || surrounding_cells === 3
      );
      if (alive) {
        if (underpopulation) {
          result[x][y] = 0;
        } else if (survival) {
          result[x][y] = 1;
        }
      } else if (procreation) {
        result[x][y] = 1;
      } else {
        result[x][y] = 0;
      }
    }
  }
  return result;
}

function App() {
  const { gosper_glider_gun } = presets(matrix);
  const [grid, set_grid] = useState(gosper_glider_gun());
  const [active, toggle] = useState(false);
  const canvas_ref = React.createRef();

  useEffect(function () {
    const canvas = canvas_ref.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "lightgray";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let x = grid.length;
    while (x) {
      x -= 1;
      let y = grid[x].length;
      while (y) {
        y -= 1;
        const current_cell = grid[x][y];
        context.fillStyle = (
          current_cell
            ? "white"
            : "black"
        );
        context.fillRect(
          (spacing + size) * x,
          (spacing + size) * y,
          size,
          size
        );
      }
    }
    if (active) {
      setTimeout(function () {
        set_grid(calculate(grid));
      }, 10);
    }
  });

  return (
    <>
      <button
        onClick={function () {
          toggle(!active);
        }}
        style={{
          height: 50,
          backgroundColor: (
            active
              ? "red"
              : "lightgreen"
          )
        }}
      >
        {
          active
            ? "Stop"
            : "Play"
        }
      </button>
      <canvas
        ref={canvas_ref}
        height={window.innerHeight - 60}
        width={window.innerWidth}
        onClick={function event_handler(event) {
          const { offsetX, offsetY } = event.nativeEvent;
          (function () {
            let x = grid.length;
            while (x) {
              x -= 1;
              let y = grid[x].length;
              while (y) {
                y -= 1;
                if (
                  offsetX >= (spacing + size) * x
                  && offsetX <= (spacing + size) * x + size
                  && offsetY >= (spacing + size) * y
                  && offsetY <= (spacing + size) * y + size
                ) {
                  grid[x][y] = (
                    grid[x][y]
                      ? 0
                      : 1
                  );
                  set_grid(grid);
                  return;
                }
              }
            }
          }());
        }}
      />
    </>
  );
}

export default App;
