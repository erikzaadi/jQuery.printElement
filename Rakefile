# grabbed from https://github.com/mudge/jquery_example/blob/master/Rakefile
task :test do
  test_file = File.expand_path("test/jquery.printelement.html")
  system("phantomjs run-qunit.js file://#{test_file}")
end

task :default => :test
