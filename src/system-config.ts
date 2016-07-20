// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {

};

/** User packages configuration. */
const packages: any = {

};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/primary',
  'app/primary/p1',
  'app/primary/p2',
  'app/primary/p3',
  'app/left',
  'app/left/l1',
  'app/left/l2',
  'app/left/l3',
  'app/right',
  'app/right/r1',
  'app/right/r2',
  'app/right/r3',
  'app/top',
  'app/top/t1',
  'app/top/t2',
  'app/top/t3',
  'app/bottom',
  'app/bottom/b1',
  'app/bottom/b2',
  'app/bottom/b3',
  'app/primary/p1/children',
  'app/primary/p1/children/p1-child1',
  'app/primary/p1/children/p1-child2',
  'app/primary/p1/children/p1-child3',
  'app/top/t1/children',
  'app/top/t1/children/t1-child1',
  'app/top/t1/children/t1-child2',
  'app/top/t1/children/t1-child3',
  'app/bottom/b1/children',
  'app/bottom/b1/children/b1-child1',
  'app/bottom/b1/children/b1-child2',
  'app/bottom/b1/children/b1-child3',
  'app/bottom/b1/children/left',
  'app/bottom/b1/children/left/b1-left1',
  'app/bottom/b1/children/left/b1-left2',
  'app/bottom/b1/children/left/b1-left3',
  'app/bottom/b1/children/right',
  'app/bottom/b1/children/right/b1-right1',
  'app/bottom/b1/children/right/b1-right2',
  'app/bottom/b1/children/right/b1-right3',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
