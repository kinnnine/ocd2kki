import { simpleGit } from 'simple-git';
import jq from 'node-jq';
import path from 'node:path';
import fs from 'node:fs';

const git = simpleGit();

const ver = await git.revparse(['--short', 'HEAD']);
const development_config = path.join(import.meta.dirname, 'neutralino.config.json');
const release_config = path.join(import.meta.dirname, 'neutralino.config.release.json');
const filter = '.version = "' + ver + '" | .logging.enabled = false | .logging.writeToLogFile = false | .modes.window.enableInspector = false | .modes.window.resizable = false';

jq.run(filter, development_config)
	.then((output) => {
		fs.writeFile(release_config, output, err => {
			if (err) {
				console.error(err);
			} else {
				console.log(ver);
			};
		});
	})
	.catch((err) => {
		console.error(err);
	});
