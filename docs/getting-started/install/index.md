---
title: Install Reliably
excerpt: Lorem Ipsum is simply dummy text.
categories: ["getting-started"]
status: published
type: doc
---
# Installing the Reliably CLI

## Quick Install Guide

Download the latest executable for your system, and copy it to a directory in
your PATH.

On macOS
```console
$ curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-darwin-amd64 -o /usr/local/bin/reliably
```

On Linux
```console
$ curl -L https://github.com/reliablyhq/cli/releases/download/v0.3.0/reliably-linux-amd64 -o /usr/local/bin/reliably
```

Make it executable.

```console
$ chmod +x /usr/local/bin/reliably
```

You're good to go!

You can check everything is working with the `reliably --version` and you're
ready to [login](../login/).

```console
$ reliably --version
Reliably CLI v0.2.0
```

More detailed installation instructions, including instructions for Windows
users, are provided just below.

## Previous versions

You can find the full list of Reliably CLI releases [here][releases].

[releases]: https://github.com/reliablyhq/cli/releases/

## Installation Details

### Installing on MacOS

Get the latest release and copy it to a directory in your PATH, for example
/usr/local/bin.
```console
$ curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-darwin-amd64 -o /usr/local/bin/reliably
```

You can also [download the latest macOS Release](https://github.com/reliablyhq/cli/releases/latest/download/reliably-darwin-amd64/)
from your browser. To make Reliably convenient to run move the
executable to a directory that is on your path, for example ```/usr/local/bin```.

If you downloaded the file from your browser (ie, not with `curl`), you might
want to rename it:
```console
$ mv reliably-darwin-amd64 reliably
```

Make the file executable. If needed, change the path to reliably to match the
location you chose.

```bash
$ chmod +x /usr/local/bin/reliably
```

Then in a terminal window execute:

```bash
$ reliably --version
```

You should see the current ```reliably``` cli version displayed.

:::tip
When you first run the `reliably` command, macOS might display a prompt. It
might look different from this one, if you're running macOS Big Sur or newer.

![macOS downloaded app promt](./images/open-app-screenshot.png)

Select ```Open``` and a terminal window will pop-up showing:

![Terminal popup](./images/terminal-popup.png)

The app will be saved as an exception to your security settings and now you
will be able to run it from the command line.
:::

### Installing Reliably on Windows 10

* Download the latest [Windows 10 Release](https://github.com/reliablyhq/cli/releases/latest/download/reliably-windows-amd64/) to a working directory.

When you select the download button you may see a browser warning:

![Browser Warning](./images/browser-warning.png)

Select the menu option and keep. You can then navigate to the file location
using your prefered terminal window (in these docs we are using Powershell).

If you want, you can check the md5 checksum to confirm the downloaded file has
not been corrupted:

```powershell
PS D:\progams\reliably Get-FileHash .\reliably.exe -algorithm md5

Algorithm           Hash
---------           ----
MD5                 1234556789
```

Compare the md5 checksum displayed with the md5 checksum in the
[MD5 checksum file](https://github.com/reliablyhq/cli/releases/download/v0.3.0/reliably-windows-amd64.md5/),
they should match.

To execute ```reliably CLI``` you will need to rename the file and add a
```.exe``` file extension. In the terminal window type:

```powershell
$ move .\reliably-windows-amd64 .\reliably.exe
```

Then execute:

```powershell
$ .\reliably.exe --version
```

You should see the current ```reliably CLI``` version displayed.

At this point, to make Reliably convenient to run, add the folder to the
executable path. From the Windows start menu right click and select ```System```
from the sub-menu. Scroll down in the About section and select Advanced Systems
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

Get the latest release and copy it to a directory in your PATH, for example
/usr/local/bin.
```console
$ curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-linnnunx-amd64 -o /usr/local/bin/reliably
```

You can also [download the latest Linux release](https://github.com/reliablyhq/cli/releases/latest/download/reliably-linux-amd64/)
from your browser. To make Reliably convenient to run move the
executable to a directory that is on your path, for example ```/usr/local/bin```.

If you downloaded the file from your browser (ie, not with `curl`), you might
want to rename it:
```console
$ mv reliably-darwin-amd64 reliably
```

If you want to check the file has not been corrupted, navigate to the directory
where you downloaded the Reliably and check the md5 checksum.

```bash
$ md5sum reliably-linux-amd64
cab791d7d4b4e5a0dcf00392b4ce672c  reliably-linux-amd64
```

Compare the md5 checksum displayed with the [MD5 checksum file](https://github.com/reliablyhq/cli/releases/download/v0.3.0/reliably-linux-amd64.md5/), they should match.

Make the file executable. If needed, change the path to reliably to match the
location you chose.

```bash
$ chmod +x /usr/local/bin/reliably
```

Then in a terminal window execute:

```bash
$ reliably --version
```

You should see the current ```reliably``` cli version displayed.