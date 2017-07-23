import $ from '@/libs/utils'

function Result(item) {
  if (typeof item != 'object') {
    item = {
      label: item,
      value: item
    };
  }
  $.extend(this, item);
}
Result.prototype.toString = function () {
  return this.value;
};
Result.prototype.valueOf = function () {
  return this.value;
};

export default Result
