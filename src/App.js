import React, { useEffect, useState } from "react";
import { presets, options } from "./presets";

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
  const [grid, set_grid] = useState(matrix);
  const [is_running, toggle] = useState(false);
  const [select, set_select] = useState();
  const [refresh_rate, set_slider] = useState(75);
  const canvas_ref = React.useRef();

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
    if (is_running) {
      const timeout = setTimeout(function () {
        set_grid(calculate(grid));
      }, refresh_rate);
      return function () {
        clearTimeout(timeout);
      };
    }
  });

  const header_styles = {
    height: 50,
    fontSize: 15,
    lineHeight: 0,
    marginRight: 20
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "gray"
        }}
      >
        <button
          onClick={function () {
            toggle(!is_running);
          }}
          style={{
            ...header_styles,
            fontSize: 30,
            outline: 0,
            backgroundColor: (
              is_running
                ? "red"
                : "lightgreen"
            )
          }}
        >
          {
            is_running
              ? "⏹️"
              : "▶️"
          }
        </button>
        <div
          style={header_styles}
        >
          <p>
            Speed:
          </p>
          <input
            type="range"
            min="10"
            max="150"
            step="1"
            value={refresh_rate}
            onChange={function (event) {
              set_slider(event.target.value);
            }}
          />
        </div>
        {
          !is_running
            ? (

              <div
                style={header_styles}
              >
                <p>
                  Preset:
                </p>
                <select value={select} onChange={function (event) {
                  set_select(event.target.value);
                  set_grid(
                    presets[event.target.value](
                      Array(X).fill().map(function () {
                        return Array(Y).fill(0);
                      })
                    )
                  );
                }}>
                  {options.map(function (item, key) {
                    const { title, value } = item;
                    return (
                      <option value={value} key={String(key)}>{title}</option>
                    );
                  })}
                </select>
              </div>
            )
            : undefined
        }
      </div>
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
