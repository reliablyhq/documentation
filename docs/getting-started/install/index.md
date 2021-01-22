---
title: Install Reliably
excerpt: Lorem Ipsum is simply dummy text.
categories: ["getting-started"]
status: published
type: doc
---
# Installing the Reliably CLI

## Quick Install Guide

If you'd like to use Reliably locally, then you can install and use the
Reliably CLI. You can grab the right executable image for your operating
system from [Reliably CLI releases][releases].

[releases]: https://github.com/reliablyhq/cli/releases

Once downloaded he appropriate binary, rename it to `reliably`:

```console
$ mv reliably-darwin-amd64 reliably
```

You can make the file executable by executing:

```console
$ chmod u+x reliably
```

To make Reliably convenient to run, move the executable to a directory that
is on your e.g. `/usr/local/bin`.

Then in a terminal window, execute:

```console
$ reliably --version
Reliably CLI v0.2.0
```

You now have `reliably` installed locally.

!!! note
    The Quick Install section above is to get the Reliably CLI installed and
    running quickly. If you need further information on installing the Reliably
    CLI for specific Operating Systems, see the [Installation Details section](#installation-details).

## Installation Details

### Installing Reliably on MacOS

* Download  [macOS Release][macos-release] to a working directory.

Check the md5 checksum to confirm the downloaded file has not been corrupted.
Open a terminal windown in the directory where you downloaded the Reliably
executable and type:

```bash
$ md5 reliably-darwin-amd64
MD5 (reliably-darwin-amd64) = 95c7709be8e1905cb5fe9aee80e18cd4
```

Compare the md5 checksum generated with the md5 checksum in the
[MD5 checksum file][macos-release-md5], they should match.

Make the file and executable by executing:

```bash
chmod u+x reliably-darwin-amd64
```

Open Finder and  navigate to the file then select the file with Control-click,
select Open from the sub-menu. A prompt will be displayed:

![Open Unix app](./images/open-app-screenshot.png)

Select ```Open``` and a terminal window will pop-up showing:

![Terminal popup](./images/terminal-popup.png)

The app will be saved as an exception to your security settings and now you
will be able to run it from the command line.

At this point to make Reliably convenient to run move the executable to a
directory that is on your path for example ```/usr/local/bin``` and rename the
file to ```reliably```. Then in a terminal window execute:

```bash
reliably --version
```

You should see the current ```reliably``` cli version disaplyed.

### Installing Reliably on Windows 10

* Download  [Windows 10 Release][windows10-release] to a working directory.

When you select the download button you may see a browser warning:

![Browser Warning](./images/browser-warning.png)

Select the menu option and keep. You can then navigate to the file location
using your prefered terminal window (in these docs we are using Powershell).
Check the md5 checksum to confirm the downloaded file has not been corrupted:

```powershell
PS D:\progams\reliably Get-FileHash .\reliably.exe -algorithm md5

Algorithm           Hash
---------           ----
MD5                 1234556789
```


Compare the md5 checksum displayed with the md5 checksum in the
[MD5 checksum file][windows10-release-md5], they should match.

To execute ```reliably CLI``` you will need to rename the file and add a ```.exe```
file extension. In the terminal window type:

```powershell
move .\reliably-windows-amd64 .\relliably.exe
```

Then execute:

```powershell
.\relliably.exe --version
```

You should see the current ```reliably CLI``` version displayed.

At this point, to make Reliably convenient, to run add the folder to the
executable path. From the Windows start menu right click and select ```System``` from
the sub-menu. Scroll down in the About section and select Advanced Systems
Settings. In the pop-up window select:

* Environment Variables
* In the Enviroment Variables pop-up, select Path from the User environment variables
* Select Edit then
* Select Browse...
* Navigate to the folder where you downloaded the reliably executable
* Select OK

Open a new Powershell window and type ```reliably --version```, the version of
the Reliably CLI should be displayed.

Reliably CLI will now be available in you Powershell sessions.


### Installing Reliably on Linux (Ubuntu)


* Download  [Reliably Linux Image][reliably-linux] to a working directory.

Open a terminal window and navigate to the directory where you downloaded the Reliably image.

Check the md5 checksum to confirm the downloaded file has not been corrupted:

```bash
md5sum reliably-linux-amd64

cab791d7d4b4e5a0dcf00392b4ce672c  reliably-linux-amd64
```

Compare the md5 checksum displayed with the [MD5 checksum file][reliably-linux-md5], they should match.

Make the file and executable by executing:

```bash
chmod u+x reliably-darwin-amd64
```

To confirm the file can be execute run:

```bash
./reliably-linux-amd64 --version

```

The Reliably CLI version should be displayed.

At this point, to make Reliably convenient, to run move the executable to a
directory that is on your path, for example ```/usr/local/bin```, and rename the
file to ```reliably```.

```bash
sudo mv reliably-linux-amd64 /usr/local/bin/reliably
```

Then open a new terminal window execute:

```bash
reliably --version
```

You should see the current ```reliably``` cli version displayed.