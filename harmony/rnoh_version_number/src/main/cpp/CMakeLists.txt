cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

set(rnoh_version_number_generated_dir "${CMAKE_CURRENT_SOURCE_DIR}/generated")
file(GLOB_RECURSE rnoh_version_number_generated_SRC "${rnoh_version_number_generated_dir}/**/*.cpp")
file(GLOB rnoh_version_number_SRC CONFIGURE_DEPENDS *.cpp)
add_library(rnoh_version_number SHARED ${rnoh_version_number_SRC} ${rnoh_version_number_generated_SRC})
target_include_directories(rnoh_version_number PUBLIC ${CMAKE_CURRENT_SOURCE_DIR} ${rnoh_version_number_generated_dir})
target_link_libraries(rnoh_version_number PUBLIC rnoh)