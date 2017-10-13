// This module is bundled inside the dll
// This is why ProvidePlugin can't can handle it

module.exports = function() {
  return jQuery.fn.jquery;
};