cost core = require('@actions/core');
cost github = require('@actions/github');
cost exec = require('@actions/exec');

function run() {
  core.notice('Hello from my custom JavaScript Action!')
}

run();
