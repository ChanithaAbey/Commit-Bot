import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const filePath = "./data.json";
const git = simpleGit();

// Generate a random commit date between (today - 1 year) and today
function randomCommitDate() {
  const start = moment().subtract(1, "year");
  const end = moment();

  const diffDays = end.diff(start, "days");
  const randDays = random.int(0, diffDays);

  return start.clone().add(randDays, "days").format();
}

async function makeCommits(n) {
  for (let i = 0; i < n; i++) {
    const date = randomCommitDate();

    const data = { date };
    await jsonfile.writeFile(filePath, data, { spaces: 2 });

    await git.add([filePath]);
    await git.commit(date, { "--date": date });
  }

  await git.push();
}

(async () => {
  const startDate = moment().subtract(3, "d").format();
  console.log("Starting reference date:", startDate);

  try {
    await makeCommits(100);
    console.log("Done.");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
})();
