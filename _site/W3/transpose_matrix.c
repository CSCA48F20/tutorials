#include <stdio.h>

void transpose(int matrix[4][4]) {
  // Your implementation goes here
  return;
}

void print_matrix(int matrix[4][4]) {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      printf("%3d ", matrix[i][j]);
    }
    printf("\n");
  }
  return;
}

int main() {
  int matrix[4][4] = {
      {1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}};
  /**
   * Should initially print:
   *   1   2   3   4
   *   5   6   7   8
   *   9  10  11  12
   *  13  14  15  16
   */
  printf("Original Matrix:\n");
  print_matrix(matrix);

  transpose(matrix);

  /**
   * Expected result:
   *   1   5   9  13 
   *   2   6  10  14 
   *   3   7  11  15 
   *   4   8  12  16 
   */
  printf("After transpose:\n");
  print_matrix(matrix);
}