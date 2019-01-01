function presets(matrix) {
  function diehard() {
    matrix[12][11] = 1;
    matrix[13][12] = 1;
    matrix[13][11] = 1;
    matrix[17][12] = 1;
    matrix[18][12] = 1;
    matrix[19][12] = 1;
    matrix[18][10] = 1;
    return matrix;
  }
  function gosper_glider_gun(){
    matrix[0][4] = 1;
    matrix[0][5] = 1;
    matrix[1][4] = 1;
    matrix[1][5] = 1;
    matrix[10][4] = 1;
    matrix[10][5] = 1;
    matrix[10][6] = 1;
    matrix[11][3] = 1;
    matrix[11][7] = 1;
    matrix[12][2] = 1;
    matrix[12][8] = 1;
    matrix[13][2] = 1;
    matrix[13][8] = 1;
    matrix[14][5] = 1;
    matrix[15][3] = 1;
    matrix[15][7] = 1;
    matrix[16][4] = 1;
    matrix[16][5] = 1;
    matrix[16][6] = 1;
    matrix[17][5] = 1;
    matrix[20][2] = 1;
    matrix[20][3] = 1;
    matrix[20][4] = 1;
    matrix[21][2] = 1;
    matrix[21][3] = 1;
    matrix[21][4] = 1;
    matrix[22][1] = 1;
    matrix[22][5] = 1;
    matrix[24][0] = 1;
    matrix[24][1] = 1;
    matrix[24][6] = 1;
    matrix[24][5] = 1;
    matrix[34][2] = 1;
    matrix[34][3] = 1;
    matrix[35][2] = 1;
    matrix[35][3] = 1;
    return matrix;
  }
  return {
    diehard,
    gosper_glider_gun
  };
}

export default presets;
