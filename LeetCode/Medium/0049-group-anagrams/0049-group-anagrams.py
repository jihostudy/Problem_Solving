#49. Group Anagrams
class Solution(object):

    def groupAnagrams(self, strs):
        dict = {}
        for word in strs:
            key = "".join(sorted(word))
            if key in dict:
                dict[key].append(word)
            else:
                dict[key] = [word]
        return list(dict.values())
