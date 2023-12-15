const stateJobs = {
  jobs: [],
};

const stateJob = {
  job: [],
};

const jobs = (state = stateJobs, action) => {
  if (action.type === "GET_JOBS") {
    return {
      ...state,
      jobs: action.payload,
    };
  }

  return state;
};

const job = (state = stateJob, action) => {
  if (action.type === "GET_JOB") {
    return {
      ...state,
      job: action.payload,
    };
  }

  return state;
};

export { jobs, job };
