package com.joeun.server.service;
import java.util.List;
import com.joeun.server.dto.Board;


public interface BoardService {
    public List<Board> list() throws Exception;
    public Board select(int no) throws Exception;
    public int insert(Board board) throws Exception;
    public int update(Board board) throws Exception;
    public int delete(int no) throws Exception;
    public int updateViews(int count, int no) throws Exception;
}
