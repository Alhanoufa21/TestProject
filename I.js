
function mooncakeSays(message) {
  let mooncake = '(O.o)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}!`;
}
system.out.print("this is a modification");


module.exports.mooncakeSays = mooncakeSays;
