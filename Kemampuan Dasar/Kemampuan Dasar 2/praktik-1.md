fidelis@ubuntu:~/Desktop$ git clone https://github.com/Fidelisi94/Fidelis.git

Command 'git' not found, but can be installed with:

sudo apt install git

fidelis@ubuntu:~/Desktop$ sudo apt install git
[sudo] password for fidelis: 
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  git-man liberror-perl
Suggested packages:
  git-daemon-run | git-daemon-sysvinit git-doc git-el git-email git-gui gitk
  gitweb git-cvs git-mediawiki git-svn
The following NEW packages will be installed:
  git git-man liberror-perl
0 upgraded, 3 newly installed, 0 to remove and 249 not upgraded.
Need to get 5.464 kB of archives.
After this operation, 38,4 MB of additional disk space will be used.
Do you want to continue? [Y/n] 
Get:1 http://id.archive.ubuntu.com/ubuntu focal/main amd64 liberror-perl all 0.17029-1 [26,5 kB]
Get:2 http://id.archive.ubuntu.com/ubuntu focal/main amd64 git-man all 1:2.25.1-1ubuntu3 [884 kB]
Get:3 http://id.archive.ubuntu.com/ubuntu focal/main amd64 git amd64 1:2.25.1-1ubuntu3 [4.554 kB]
Fetched 5.464 kB in 9s (589 kB/s)                                              
Selecting previously unselected package liberror-perl.
(Reading database ... 143596 files and directories currently installed.)
Preparing to unpack .../liberror-perl_0.17029-1_all.deb ...
Unpacking liberror-perl (0.17029-1) ...
Selecting previously unselected package git-man.
Preparing to unpack .../git-man_1%3a2.25.1-1ubuntu3_all.deb ...
Unpacking git-man (1:2.25.1-1ubuntu3) ...
Selecting previously unselected package git.
Preparing to unpack .../git_1%3a2.25.1-1ubuntu3_amd64.deb ...
Unpacking git (1:2.25.1-1ubuntu3) ...
Setting up liberror-perl (0.17029-1) ...
Setting up git-man (1:2.25.1-1ubuntu3) ...
Setting up git (1:2.25.1-1ubuntu3) ...
Processing triggers for man-db (2.9.1-1) ...
fidelis@ubuntu:~/Desktop$ git clone https://github.com/Fidelisi94/Fidelis.git
Cloning into 'Fidelis'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (6/6), 1.25 KiB | 98.00 KiB/s, done.
fidelis@ubuntu:~/Desktop$ git status
fatal: not a git repository (or any of the parent directories): .git
fidelis@ubuntu:~/Desktop$ cd Fidelis/
fidelis@ubuntu:~/Desktop/Fidelis$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
fidelis@ubuntu:~/Desktop/Fidelis$ git add .
fidelis@ubuntu:~/Desktop/Fidelis$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   README.md

fidelis@ubuntu:~/Desktop/Fidelis$ git commit -m "ini commit pertama"

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'fidelis@ubuntu.(none)')
fidelis@ubuntu:~/Desktop/Fidelis$  git config --global user.email "you@example.com"
fidelis@ubuntu:~/Desktop/Fidelis$  git config --global user.email "fidelistito@gmail.com"
fidelis@ubuntu:~/Desktop/Fidelis$ git config --global user.name "Fidelis94"
fidelis@ubuntu:~/Desktop/Fidelis$ git commit -m "ini commit pertama"
[main 1285231] ini commit pertama
 1 file changed, 1 insertion(+)
fidelis@ubuntu:~/Desktop/Fidelis$ git push origin main
Username for 'https://github.com': Fidelis94
Password for 'https://Fidelis94@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/Fidelisi94/Fidelis.git/'
fidelis@ubuntu:~/Desktop/Fidelis$ git push origin main
Username for 'https://github.com': fidelisi94
Password for 'https://fidelisi94@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/Fidelisi94/Fidelis.git/'
fidelis@ubuntu:~/Desktop/Fidelis$ git push origin main
Username for 'https://github.com': Fidelisi94
Password for 'https://Fidelisi94@github.com': 
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 291 bytes | 291.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/Fidelisi94/Fidelis.git
   8dd6e57..1285231  main -> main
fidelis@ubuntu:~/Desktop/Fidelis$ 


