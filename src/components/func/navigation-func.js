export function setPreviousLink(prevLinkState, setPrevLink, prevPath) {
  try {
    // console.log('prevLinkState', prevLinkState);
    // console.log('prevPath', prevPath);

    if (prevPath !== prevLinkState) {
      // console.log("UPDATED");
      setPrevLink(prevPath);
    }
  } catch (error) {
    console.log(error);
  }
}
