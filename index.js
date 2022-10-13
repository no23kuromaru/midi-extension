const easymidi = require('easymidi');
const prompts = require('prompts');
const chord = require('./lib/chord');

const outputs = easymidi.getOutputs();
const inputs = easymidi.getInputs();

(async () => {
  const response = await prompts([
    {
      type: 'select',
      name: 'input',
      message: 'Select receive midi message port.',
      choices: inputs.map((value) => {
        return {
          title: value,
          value: value
        }
      })
    },
    {
      type: 'select',
      name: 'output',
      message: 'Select send midi message port.',
      choices: outputs.map((value) => {
        return {
          title: value,
          value: value
        }
      })
    }
  ]);

  // open port
  const input = new easymidi.Input(response.input);
  const output = new easymidi.Output(response.output);

  input.on("noteon", (msg) => {
    console.log(msg);
    chord.major(msg).forEach((append) => {
      console.log(append)
      output.send("noteon", append);
    });
  });

  input.on("noteoff", (msg) => {
    console.log(msg)

    chord.major(msg).forEach((append) => {
      console.log(append)
      output.send("noteoff", append);
    });
  });
})();
