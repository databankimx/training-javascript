const Status = Object.freeze({DRAFT:'draft', REVIEW:'review', DONE:'done'});
function next(status) {
  if (status === Status.DRAFT) return Status.REVIEW;
  if (status === Status.REVIEW) return Status.DONE;
  throw new Error('No next transition');
}
console.log(next(Status.DRAFT));
console.log(next(Status.REVIEW));
