import core from  '@actions/core';
import github from '@actions/github';
try {
    const ha=core.getInput('ha');
    console.log(`test ${ha}`);
    const xi='xi ni mei';
    core.setOutput("xi",xi);
}catch (e) {
    core.setFailed(e.message)
}
