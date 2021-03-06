export default (steemApi, $q) => {
  return {
    getDiscussionsBy: (what, tag, startAuthor, startPermalink, limit = 20) => {
      let defer = $q.defer();

      let fn = `getDiscussionsBy${what}`;

      let params = {tag: tag, start_author: startAuthor, start_permlink: startPermalink, limit: limit};

      steemApi.getApi()[fn](params, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });

      return defer.promise;
    },
    getRepliesByLastUpdate: (startAuthor, startPermalink, limit = 20) => {
      let defer = $q.defer();

      steemApi.getApi().getRepliesByLastUpdate(startAuthor, startPermalink, limit, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });

      return defer.promise;
    },
    getTrendingTags: (afterTag = null, limit = 50) => {
      let defer = $q.defer();

      steemApi.getApi().getTrendingTags((afterTag.trim().length > 0 ? afterTag.trim() : null), limit, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });

      return defer.promise;
    },
    getActiveVotesAsync: (author, permLink) => {
      let defer = $q.defer();

      steemApi.getApi().getActiveVotesAsync(author, permLink, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });

      return defer.promise;
    },
    getContent: (author, permLink) => {
      let defer = $q.defer();

      steemApi.getApi().getContent(author, permLink, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getState: (path) => {
      let defer = $q.defer();

      steemApi.getApi().getState(path, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getAccounts: (names) => {
      let defer = $q.defer();

      steemApi.getApi().getAccounts(names, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });

      return defer.promise;
    },
    getContentReplies: (author, parentPermlink) => {
      let defer = $q.defer();

      steemApi.getApi().getContentReplies(author, parentPermlink, (err, response) => {

        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getFollowCount: (author) => {
      let defer = $q.defer();

      steemApi.getApi().getFollowCount(author, (err, response) => {

        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getDynamicGlobalProperties: () => {
      let defer = $q.defer();

      steemApi.getApi().getDynamicGlobalPropertiesAsync((err, response) => {

        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getFeedHistory: () => {
      let defer = $q.defer();

      steemApi.getApi().getFeedHistoryAsync((err, response) => {

        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getFollowing: (follower, startFollowing, followType = 'blog', limit = 100) => {
      let defer = $q.defer();
      steemApi.getApi().getFollowing(follower, startFollowing, followType, limit, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getFollowers: (following, startFollower, followType = 'blog', limit = 100) => {
      let defer = $q.defer();
      steemApi.getApi().getFollowers(following, startFollower, followType, limit, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getRewardFund: (name = 'post') => {
      let defer = $q.defer();
      steemApi.getApi().getRewardFund(name, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    lookupAccounts: (q, size) => {
      let defer = $q.defer();
      steemApi.getApi().lookupAccounts(q, size, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getBlock: (num) => {
      let defer = $q.defer();
      steemApi.getApi().getBlock(num, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getWithdrawRoutes: (account) => {
      let defer = $q.defer();
      steemApi.getApi().getWithdrawRoutes(account, 'outgoing', (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getWitnessesByVote: (from = null, limit = 100) => {
      let defer = $q.defer();
      steemApi.getApi().getWitnessesByVote(from, limit, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    },
    getVestingDelegations: (account, from=null, limit=50) => {
      let defer = $q.defer();
      steemApi.getApi().getVestingDelegations(account, from, limit, (err, response) => {
        if (err) {
          defer.reject(err);
        } else {
          defer.resolve(response);
        }
      });
      return defer.promise;
    }
  }
};



