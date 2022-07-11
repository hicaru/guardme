import { incognitoAllowedCheck } from 'lib/incognito';

(async function(){
  const isAllowed = await incognitoAllowedCheck();

  console.log(isAllowed);
}());
