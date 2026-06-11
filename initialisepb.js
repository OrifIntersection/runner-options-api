import PocketBase from "pocketbase";

const password = process.argv[2];
const pb = new PocketBase("http://localhost:8090");

const animals = [
	"cat",
	"dog",
	"elephant",
	"tiger",
	"penguin",
	"fox",
	"wolf",
	"bear",
	"eagle",
	"hawk",
	"otter",
	"badger",
	"raven",
	"cobra",
	"panther",
	"lynx",
	"bison",
	"falcon",
	"jaguar",
	"lemur",
	"moose",
	"orca",
	"parrot",
	"python",
	"rabbit",
	"salmon",
	"turtle",
	"viper",
	"walrus",
	"zebra",
	"crane",
	"dingo",
	"gecko",
	"ibis",
	"koala",
	"narwhal",
];

const adjectives = [
	"happy",
	"angry",
	"sleepy",
	"brave",
	"crazy",
	"mighty",
	"swift",
	"silent",
	"fierce",
	"gentle",
	"noble",
	"wild",
	"bold",
	"calm",
	"dark",
	"keen",
	"proud",
	"rapid",
	"sharp",
	"steady",
	"stoic",
	"vivid",
	"warm",
	"zen",
	"cosmic",
	"cryptic",
	"daring",
	"eager",
	"gritty",
	"hollow",
	"iron",
	"jaded",
	"lucid",
	"rogue",
	"solar",
	"vast",
];

const hosts = [
	{
		name: "mightypython",
		port: 1024,
		repo: "web-static-org-repo-test",
		certDate: 1780584188753,
	},
	{
		name: "calmorca",
		port: 1025,
		repo: "web-express-org-repo-test",
		certDate: 1780640815144,
	},
	{
		name: "eagermoose",
		port: 1026,
		repo: "vite-express-org-repo-test",
		certDate: 1780648849145,
	},
];

await pb
	.collection("_superusers")
	.authWithPassword("ljhaesler@protonmail.com", password);

for (const animal of animals) {
	await pb.collection("animals").create({ animal });
}

for (const adjective of adjectives) {
	await pb.collection("adjectives").create({ adjective });
}

for (const host of hosts) {
	await pb.collection("hosts").create({
		name: host.name,
		port: host.port,
		repo: host.repo,
		certDate: new Date(host.certDate),
	});
}
