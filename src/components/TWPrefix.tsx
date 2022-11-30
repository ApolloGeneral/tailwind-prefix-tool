import { useState, type BaseSyntheticEvent } from 'react';
import { Button } from 'flowbite-react';
import { BottomFooter } from './Footer';
import { generatePrefixedClass } from '../utils/helper';

export function TWPrifex() {
  const [prefix, setPrefix] = useState('');
  const [sourceString, setSourceString] = useState('');
  const [formattedString, setFormattedString] = useState('');

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const classes = e.target.value;
    const tokens = classes.split(' ');
    const prefixedClasses = generatePrefixedClass(tokens, prefix || 'tw-');
    setSourceString(classes);
    setFormattedString(prefixedClasses.join(' '));
  };

  const handleResetClick = () => {
    setSourceString('');
    setFormattedString('');
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl text-center font-bold mb-10 text-gray-900 dark:text-white">
        Tailwind Prefix Validator
      </h1>
      <div className="container mx-auto px-2 mb-10 flex flex-row items-center justify-center gap-2">
        <label
          htmlFor="prefix"
          className="mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Prefix Value
        </label>
        <input
          type="text"
          id="prefix"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="e.g. tw-"
          value={prefix}
          onChange={(e: BaseSyntheticEvent) => setPrefix(e.target.value)}
        />
      </div>
      <div className="container mx-auto px-2 mb-10 flex flex-col justify-center items-start gap-2">
        <label
          htmlFor="input"
          className="text-md font-medium text-gray-900 dark:text-white"
        >
          Paste or write your html with non-prefixed tailwind classes
        </label>
        <textarea
          id="input"
          rows={4}
          className="w-full text-sm mb-5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="flex w-full hover:text-black-100 mt-8 -mb-4"
          value={sourceString}
          onChange={handleInputChange}
        />
        <label
          htmlFor="output"
          className="text-md font-medium text-gray-900 dark:text-white"
        >
          Output:
        </label>
        <textarea
          id="output"
          rows={4}
          className="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="tw-flex tw-w-full hover:tw-text-black-100 tw-mt-8 -tw-mb-4"
          defaultValue={formattedString}
        />
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <Button onClick={handleResetClick}>Reset</Button>
      </div>
      <BottomFooter />
    </div>
  );
}
