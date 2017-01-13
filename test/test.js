//step one know what things you do
// wordCount:
// 'my dog is yellow' => four words
//  '     this should    have five words     ' => strip spaces
// 123 => error
// '' => 0
//


const expect = require('chai').expect;
const lex = require('../lib/lex');

describe('Word Count', () => {

  it('should count the words', (done) => {

    const str = 'my dog is yellow';
    expect(lex.wordCount(str)).to.equal(4);
    done();
  });

  it('should catch extra spaces', (done) => {
    const str= "     this should    have five words     ";
    expect(lex.wordCount(str)).to.equal(5);
    done();
  });

  it('should fail on the numbers', (done) => {
    const testFn = () => {
      return lex.wordCount(12345);
    }
    expect(testFn).to.throw(TypeError, 'text.split is not a function');
    done();
  });

  it('should handle empty spaces', (done) => {
    const str= "";
    expect(lex.wordCount(str)).to.equal(0);
    done();
  });

  it('should fail on an array', (done) => {
    const testFn = () => {
      return lex.wordCount([]);
    }
    expect(testFn).to.throw(TypeError, 'text.split is not a function');
    done();
  });


})
describe('Character Count', () => {

  it('should count the characters', (done) => {
    const str = "abcde";
    expect(lex.charCount(str)).to.equal(5);
    done();
  });

  it('should count the characters', (done) => {
    const str = ' asdf asdf  asdf asdf asdf ';
    expect(lex.charCount(str)).to.equal(27);
    done();
  });

  it('should return 0 for an empty string', (done) => {
    const str = '';
    expect(lex.charCount(str)).to.equal(0);
    done();
  });

  it('should not count characters', (done) => {
    const str = 'a...';
    expect(lex.charCount(str, {noPunctuation: true})).to.equal(1);
    done();
  });

  it('should not count spaces', (done) => {
    const str = 'a...      ';
    expect(lex.charCount(str, {noSpaces: true})).to.equal(4);
    done();
  });

  it('should not count emojis with noPunctuation', (done) => {
    const str = '😃😃😃a...      ';
    expect(lex.charCount(str, {noSpaces: true, noPunctuation: true})).to.equal(1);
    done();
  });

  it('should return an error for an array', (done) => {
    const testFn = () => {
      return lex.charCount([]);
    };
    expect(testFn).to.throw();
    done();
  });

})
// charCount:
// 'abcde' => 5
// ' asdf asdf  asdf asdf asdf ' => 27
// '' => 0
// [], etc => error
//
