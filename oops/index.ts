// const set = new Set([1, 2]);

// interface TakePhoto {
//   cemeraMode: string;
//   filter: string;
//   burst: number;
// }

// interface Story {
//   createStory(): void;
// }

// class Instagram implements TakePhoto {
//   constructor(
//     public cemeraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}
// }

// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cemeraMode: string,
//     public filter: string,
//     public burst: number,
//     public short: string
//   ) {}

//   createStory(): void {
//     console.log('Story was created.');
//   }
// }

// abstraction class

// abstract class TakePhoto {
//   constructor(public cemeraMode: string, public filter: string) {}

//   abstract getSepia(): void;

//   getReelTime(): number {
//     // implement complex calculation
//     return 8;
//   }
// }

// class Instagram extends TakePhoto {
//   constructor(
//     public cemeraMode: string,
//     public filter: string,
//     public burst: number
//   ) {
//     super(cemeraMode, filter);
//   }

//   getSepia(): void {
//     console.log('Hello Sepia');
//   }
// }

// const hc = new Instagram('test', 'test', 3);

// console.log(hc.getReelTime());

// interface TakePhoto {
//   cemeraMode: string;
//   filter: string;
//   bust: number;
// }

// interface Story {
//   createStory(): void;
// }

// class Instagram implements TakePhoto {
//   constructor(
//     public cemeraMode: string,
//     public filter: string,
//     public bust: number
//   ) {}
//   createStory() {}
// }

// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cemeraMode: string,
//     public filter: string,
//     public bust: number
//   ) {}

//   createStory(): void {}
// }

// abstract class TakePhoto {
//   constructor(public cemeraMode: string, public filter: string) {}

//   abstract createPhoto(): void;

//   createReelTime(): number {
//     //  implement complex featur
//     return 8;
//   }
// }

// class Instagram extends TakePhoto {
//   constructor(
//     public cemeraMode: string,
//     public filter: string,
//     public burst: number
//   ) {
//     super(cemeraMode, filter);
//   }

//   createPhoto(): void {
//     console.log('Photo created');
//   }
// }

// const hc = new Instagram('test', 'test', 3);

// hc.createReelTime();
