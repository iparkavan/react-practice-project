"use client";

import React, { useState } from "react";

type LectureType = "video" | "assignment" | "quiz";

interface Lecture {
  id: string;
  title: string;
  type: LectureType;
}

interface Section {
  id: string;
  title: string;
  objective: string;
  lectures: Lecture[];
}

const page = () => {
  const [sections, setSections] = useState<Section[]>([]);

  const onAddSectionHandler = () => {
    const newSection: Section = {
      id: new Date().getTime().toString(),
      title: "Section Title",
      objective: "Descpriction...",
      lectures: [],
    };

    setSections((prevSection) => [...prevSection, newSection]);
  };

  const onLectureAddHandler = (id: string, type: LectureType) => {
    const newLecture: Lecture = {
      id: new Date().getTime().toString(),
      title: "new Lecture",
      type,
    };

    setSections((prevSection) =>
      prevSection.map((section) =>
        section.id === id
          ? {
              ...section,
              lectures: [...section.lectures, newLecture],
            }
          : section,
      ),
    );
  };

  const onSectionChangeHandler = (
    sectionId: string,
    updates: Partial<Section>,
  ) => {
    setSections((prevSection) =>
      prevSection.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              ...updates,
            }
          : section,
      ),
    );
  };

  const onLectureChangeHandler = (
    sectionId: string,
    lectureId: string,
    updates: Partial<Lecture>,
  ) => {
    setSections((prevSection) =>
      prevSection.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lectures: section.lectures.map((lecture) =>
                lecture.id === lectureId ? { ...lecture, ...updates } : lecture,
              ),
            }
          : section,
      ),
    );
  };

  const onSectionDeleteHandler = (sectionId: string) => {
    setSections((prevSection) =>
      prevSection.filter((section) => section.id !== sectionId),
    );
  };

  const onLectureDeleteHandler = (sectionId: string, lectureId: string) => {
    setSections((prevSection) =>
      prevSection.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lectures: section.lectures.filter(
                (lecture) => lecture.id !== lectureId,
              ),
            }
          : section,
      ),
    );
  };

  return (
    <div>
      <div className="space-y-2">
        {sections.length > 0 &&
          sections.map((section) => (
            <div key={section.id} className="border-2 p-2 rounded-lg">
              <div>
                <div className="flex items-center justify-between border-b">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <input
                      value={section.title}
                      onChange={(e) =>
                        onSectionChangeHandler(section.id, {
                          title: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      value={section.objective}
                      onChange={(e) =>
                        onSectionChangeHandler(section.id, {
                          objective: e.target.value,
                        })
                      }
                    />
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={() => onSectionDeleteHandler(section.id)}
                  >
                    ❌
                  </span>
                </div>
                <div className="space-y-2">
                  {section.lectures.length > 0 &&
                    section.lectures.map((lecture) => (
                      <div
                        className="flex p-1 border-2 border-yellow-300 rounded-lg items-center justify-center gap-2"
                        key={lecture.id}
                      >
                        <input
                          value={lecture.title}
                          onChange={(e) =>
                            onLectureChangeHandler(section.id, lecture.id, {
                              title: e.target.value,
                            })
                          }
                        />
                        <div>{lecture.type}</div>
                        <span
                          className="cursor-pointer"
                          onClick={() =>
                            onLectureDeleteHandler(section.id, lecture.id)
                          }
                        >
                          ❌
                        </span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => onLectureAddHandler(section.id, "video")}
                >
                  Lecture
                </button>
                <button onClick={() => onLectureAddHandler(section.id, "quiz")}>
                  Quiz
                </button>
                <button
                  onClick={() => onLectureAddHandler(section.id, "assignment")}
                >
                  Assignment
                </button>
              </div>
            </div>
          ))}
      </div>

      <button className="primary-btn" onClick={() => onAddSectionHandler()}>
        Add Section
      </button>
    </div>
  );
};

export default page;
