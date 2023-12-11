package com.joeun.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.server.dto.Board;
import com.joeun.server.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/boards")
public class BoardController {
    @Autowired
    private BoardService boardService;
    //CRUD 메소드 자동 생성 : sp-crud //spring code generator 확장팩설치로 가능했음
    //자동import : alt + shift + O
    //한줄 삭제 : ctrl + shift + K
    @GetMapping()
    public ResponseEntity<List<Board>> getAll() {
        log.info("[GET] - /boards - 게시글 목록");
        try {
            List<Board> boardList = boardService.list();
            if (boardList == null){
                log.info("조회된 게시글 없음");
            } else {
                log.info("게시글 수 : "+ boardList.size());
            }
            //첫번째매개변수에 바디에 담길 데이터를 넣어줍니다. 
            return new ResponseEntity<>(boardList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{no}")
    public ResponseEntity<Board> getOne(@PathVariable Integer no) {
        log.info("[GET] - /boards" + no + " - 게시글 조회");
        try {
            Board board = boardService.select(no);
            if (board == null){
                board = new Board();
                board.setTitle("데이터 없음");
            }
            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping("/insert")
    public ResponseEntity<String> create(@RequestBody Board board) {
        log.info("[Post] - /boards/insert - 게시글 쓰기");
        try {
            int result = boardService.insert(board);
            if (result >0){
                return new ResponseEntity<>("게시글 등록 성공", HttpStatus.CREATED); //CREATED : 201. 하나 생성되었다~
            } else {
                return new ResponseEntity<>("게시글 등록 실패", HttpStatus.OK); 
            }
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping("update")
    public ResponseEntity<String> update(@RequestBody Board board) {
        log.info("[Put] - /boards/update - 게시글 수정");
        try {
            int result = boardService.update(board);
            if (result >0){
                return new ResponseEntity<>("게시글 수정 성공", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("게시글 수정 실패", HttpStatus.OK); 
            }
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{no}")
    public ResponseEntity<String> destroy(@PathVariable Integer no) {
        log.info("[Delete] - /boards/" + no + " - 게시글 삭제");
        try {
            int result = boardService.delete(no);
            if (result >0){
                return new ResponseEntity<>("게시글 삭제 성공", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("게시글 삭제 실패", HttpStatus.OK); 
            }
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
