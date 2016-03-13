export default function() {
  return function(data) {
    const summary = data.reduce((acc, curr) => {
      return angular.extend({}, acc, {
        info: acc.info.concat(curr.label),
        total: acc.total + curr.value,
      });
    },
    {
      info: [],
      total: 0,
    });
    return `${summary.info.join(',')} - ${summary.total}`;
  };
}
