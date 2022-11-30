'''
Author: artemis
Date: 2022-11-13 19:19:14
LastEditTime: 2022-11-30 17:19:43
LastEditors: artemis
Description: python脚本处理音乐格式 m4a -> mp3
'''
import os

path = "/Users/artemis/Desktop/ColdPlay"
new_path = "/Users/artemis/Desktop/mp3/ColdPlay"
file_all = os.listdir(path)
for i in file_all:
  old_path = path+os.sep+i
  if os.path.isdir(old_path):
    if not os.path.exists(new_path+os.sep+i):
      os.mkdir(new_path+os.sep+i)
    file_all1 = os.listdir(old_path)
    for j in file_all1:
      full_old_path = old_path.replace(' ','\ ')+os.sep+j.replace(' ','\ ')
      full_old_path = full_old_path.replace('&','\&').replace("(",'\(').replace(")",'\)').replace("-",'\-').replace("_",'\_')
      new_file_path = full_old_path.replace('Desktop/','Desktop/mp3/').split('.')[0]+'\.mp3'
      os.system("ffmpeg -i "+full_old_path+" "+new_file_path)


