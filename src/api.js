import fetch from 'isomorphic-fetch';

export default function getIssues() {
 return fetch('https://api.github.com/repos/yomguithereal/baobab/issues')
     .then((r) => r.json());
}