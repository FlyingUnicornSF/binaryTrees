function checkBST(
  root,
  minValue = Number.MIN_VALUE,
  maxValue = Number.MAX_VALUE
) {
  if (root == null) {
    return true;
  }

  if (root.value < minValue || root.value > maxValue) {
    return false;
  }

  return (
    checkBST(root.left, minValue, root.value - 1) &&
    checkBST(root.right, root.value + 1, maxValue)
  );
}
