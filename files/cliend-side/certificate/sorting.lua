local lfs = require "lfs"

-- Function to get a list of files in a directory
local function getFilesInDirectory(directory)
    local files = {}
    for file in lfs.dir(directory) do
        if file ~= "." and file ~= ".." then
            local filePath = directory .. "/" .. file
            local attr = lfs.attributes(filePath)
            if attr.mode == "file" then
                table.insert(files, file)
            end
        end
    end
    return files
end

-- Function to sort files
local function sortFiles(files)
    table.sort(files)
    return files
end

-- Main logic
local directory = "./database" 
local files = getFilesInDirectory(directory)

if #files == 0 then
    print("No files found in the directory.")
else
    print("Files before sorting:")
    for _, file in ipairs(files) do
        print(file)
    end

    files = sortFiles(files)

    print("\nFiles after sorting:")
    for _, file in ipairs(files) do
        print(file)
    end
end